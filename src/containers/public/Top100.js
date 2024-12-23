import { useEffect, useState } from 'react'
import { getTop100 } from '../../apis/homeAPI'
import { AlbumItem } from '../../components'

const Top100 = () => {
    const [top100, setTop100] = useState([])

    useEffect(() => {
        const fetchTop100 = async () => {
            let res = await getTop100()
            if (res.data.err === 0) {
                setTop100(res.data.data)
            }
            console.log(top100)
        }
        fetchTop100()
    }, [])

    return (
        <div>
            {top100?.map((item, _) => (
                <div className='mt-10' key={item.title}>
                    <h1 className='font-bold text-xl mb-3'>{item.title}</h1>
                    <div className='grid grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10'>
                        {item.items.map(item => (
                            <AlbumItem key={item.encodeId} item={item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Top100
