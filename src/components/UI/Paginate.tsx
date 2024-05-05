
function Paginate({ setPage, page }: any) {
    return (
        <div className="paginate">
            <button disabled={page <= 1} className="paginate__prev" onClick={() => setPage(page - 1)}>Prev</button>
            <span>{page}/500</span>
            <button className="paginate__next" onClick={() => setPage(page + 1)}>Next</button>
        </div>
    )
}

export default Paginate