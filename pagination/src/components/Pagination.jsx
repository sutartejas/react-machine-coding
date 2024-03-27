import { useEffect, useState } from "react";


const Pagination = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)
    const [contentPerPage, setContentPerPage] = useState(10)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        fetchData()
    }, [page])


    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=${contentPerPage}&skip=${page * totalPages - contentPerPage}&page=${page}`);
        const data = await response.json();
        console.log(data, "data")
        if (data && data.products) setData(data.products);
        setTotalPages(data.total / contentPerPage)
    }


    const handlePageChnage = (selectedPage) => {
        if (selectedPage => page && selectedPage <= totalPages && selectedPage !== page) setPage(selectedPage);
    }

    return <div>
        {data.map((obj, index) => {
            return (<div className="card" key={index}>
                <span className="id">{obj.id}</span>
                <div className="title">{obj.title}</div>
            </div>)
        })}
        {data.length > 0 && <div className="pagination">
            <span className={(page > 1) ? '' : 'disabled'} onClick={() => handlePageChnage(page - 1)}>◀️</span>
            {
                [...Array(totalPages)].map((_, i) => {
                    return <span key={i} className={(page === i + 1) ? 'selected_page' : ''} onClick={() => handlePageChnage(i + 1)}>{i + 1}</span>
                })
            }
            <span className={(page < totalPages) ? '' : 'disabled'} onClick={() => handlePageChnage(page + 1)}>▶️</span>
        </div>}
    </div>
}

export default Pagination