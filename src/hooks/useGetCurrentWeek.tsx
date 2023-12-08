import { fetchCurrentWeek } from '@/helperFn/helper';
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query';
import {Selection} from "@react-types/shared";

const useGetCurrentWeek = () => {

    const [selected, setSelected] = useState<Selection>(new Set([]));
    const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected],
    );
    const [weeks, setWeeks] = useState<number[]>([])

    const {data} = useQuery({
        queryKey:['currentWeek'],
        queryFn: () => fetchCurrentWeek(),
        onSuccess: (data  ) => {
            const temp = [];
            for(let i=0; i<4; i++)
            {
              temp.push(data + i);
            }
            setWeeks(temp);
            if (typeof data === 'number') {
              setSelected(new Set([`Week ${data}`]));
            }
        }
      })

    return {weeks, selected, selectedValue, setSelected}

}

export default useGetCurrentWeek