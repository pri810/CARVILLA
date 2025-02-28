
function CarService({ cards }) {
    return (
        <div class="plantCard">
            <div class="thumbnail">
                <img src={cards?.img} alt="" />
            </div>
            <div class="info">
                <h5>{cards?.name}</h5>
                <p>{cards?.desc}</p>
                <div className="bttm-line"></div>
            </div>
        </div>
    )
}

export default CarService