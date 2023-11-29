import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/client'
import { getSession } from '@/lib/serverSession';

interface Props {
    userId: string,
    team: string
}

export async function GET(request: NextRequest, response: NextResponse)
{


    try {
        const sess = await getSession();
        if (!sess)
        {
            return NextResponse.json({message: 'error'});
        }
        const watchlist = await prisma.user.findUnique({
            where : {
                id: parseInt(sess?.user.id || '')
            },
            select: { watchlist : true },
        } as any)
        return NextResponse.json({watchlist})
    } catch (error)
    {
        console.log(error)
        return NextResponse.json({error})
     
    }

}
 
export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { userId, team }: Props = await request.json();

        const existingUser = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
        });

        if(existingUser)
        {
            const watchlist = existingUser.watchlist;
            if(!watchlist.includes(team))
            {
                await prisma.user.update({
                    where: { id: parseInt(userId)},
                    data: {
                        watchlist: {
                            push:team
                        }
                    }
                });
            }
        }
        if (!existingUser) {
            return NextResponse.json({error: 'user does not exist'})
        }

        return NextResponse.json({ success: 'Data added successfully', existingUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' });
    } finally {

        await prisma.$disconnect();
    }
}


export async function PATCH(request: NextRequest, response: NextResponse) {
    try {
        const { userId, team }: Props = await request.json();

        const existingUser = await prisma.user.findUnique({
            where: { id: parseInt(userId)},
        });

        if(existingUser)
        {
            const watchlist = existingUser.watchlist;
            if(watchlist.includes(team))
            {
                await prisma.user.update({
                    where: { id: parseInt(userId)},
                    data: {
                        watchlist: {
                            set: watchlist.filter((singleTeam) => singleTeam !== team),
                        }
                    }
                });
            }
        }
        if (!existingUser) {
            return NextResponse.json({error: 'user does not exist'})
        }

        return NextResponse.json({ success: 'Data added successfully', existingUser });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' });
    } finally {

        await prisma.$disconnect();
    }
}