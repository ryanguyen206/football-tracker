import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import prisma from "../../prisma/client";

export const authOptions: NextAuthOptions = {

    pages:{
        signIn:'/sign-in'
    },
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLEID || '',
            clientSecret:process.env.GOOGLESECRET || ''
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({user}) {
            const email = user.email;
            const existingUser = await prisma.user.findFirst({
                where: {email: email || ''}
            })
        

            if (!existingUser) {
                try {
                        const newUser = await prisma.user.create({
                        data: {
                            email: user.email || '',
                            name: user.name,
                            watchlist: []       
                        }
                    })   
                    user.id = newUser.id.toString();
                } catch (error) {
                    throw new Error('Failed to create a new user');
                }
            } else {
                user.id = existingUser.id.toString(); 
            }
            return true;
          },
          async jwt({token, user})
          {
             
              if(user)
              {
                  return {
                      ...token,
                      id: user.id,
                  }
              }
              return token;
          },
        async session({session, token}) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                }
                
            }  
        },
   
    },
    session: {
        // Set to jwt in order to CredentialsProvider works properly
        strategy: 'jwt'
    }
    
}