import { useEffect, useState } from "react";

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    const [skip, setSkip] = useState(0)

    useEffect(() => {
        fetchData()
    }, [page])

    const handleInfiniteScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setPage(prev => prev + 1);
            //setSkip(prev => prev + 20)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => {
            window.removeEventListener('scroll', handleInfiniteScroll)
        }
    }, [])


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&&_page=${page}`);
        const data = await response.json();
        console.log(data, skip, "data")
        setData(prev => [...prev, ...data])
    }

    return <div>
        {data.map((obj, index) => {
            return (<div className="card" key={index}>
                <span className="id">{obj.id}</span>
                <div className="title">{obj.title}</div>
            </div>)
        })}
    </div>
}

export default InfiniteScroll