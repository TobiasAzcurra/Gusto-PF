import React from "react";
import "./Card.css";
import * as actions from "../../redux/actions/globalActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Card({
	id,
	name,
	price,
	description,
	image,
	setDataToEdit,
	addToCart,
}) {
	const dispatch = useDispatch();

	const trashEmpty = (id) => {
		dispatch(actions.deleteProducts(id));
		window.location.reload();
	};

	//verifica si esta en la ruta /adminprovisorio
	const isAdminRoute = window.location.pathname === "/adminprovisorio";

	return (
		<section className="light">
			<div >
				<div className="container py-2">
					<div className="postcard light red">
						<img className="postcard__img" src={image} alt="burger" />
						<div className="postcard__text t-dark">
							<Link to={`/products/${id}`} className="postcard__title red">{name}</Link>
							<div className="postcard__subtitle small">
								<time dateTime="2020-05-25 12:00:00"></time>
							</div>
							<div className="postcard__bar"></div>
							<div className="postcard__preview-txt"> {description}</div>
							<ul className="postcard__tagbox">
								<li style={{fontSize: '20px' }} className="tag__item">
									${price}
								</li>
							</ul>
							<div style={{ display: 'flex', flexDirection: 'column', width:'20%', gap:'1rem', marginTop:'20px' }}>
							<button type="button" class="btn btn-danger" onClick={() => addToCart(id)}>Agregar al carrito</button>
								{isAdminRoute && <button type="button" class="btn btn-primary" onClick={() => trashEmpty(id)}>Borrar</button>}
								{/* {isAdminRoute && (
									<button onClick={() => setDataToEdit(id)}>Editar</button>
								)} */}
							</div>
							<div>
							</div>
						</div>



					</div>
				</div>
			</div>


		</section>
	);
}
