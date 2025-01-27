import React from 'react'
import { Link } from 'react-router-dom'
import { MdInventory2, MdAccountCircle, MdOutlineRestaurantMenu } from 'react-icons/md'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import './Sidebar.css'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul className='ul'>
                    <Link to='/' className='span' style={{ textDecoration: 'none' }}>
                        <li className='li'>
                            <AiOutlineHome className="icon" />
                            <span className='span'>Home</span>
                        </li>
                    </Link>
                    <Link to='/menu' style={{ textDecoration: 'none' }}>
                        <li className='li'>
                            <MdOutlineRestaurantMenu className="icon" />
                            <span className='span'>Menu</span>
                        </li>
                    </Link>
                    <p className="title">ADMIN</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li className='li'>
                            <MdAccountCircle className="icon" />
                            <span className='span'>Usuarios</span>
                        </li>
                    </Link>
                    <Link to="/productlist" style={{ textDecoration: "none" }}>
                        <li className='li'>
                            <MdInventory2 className="icon" />
                            <span className='span'>Productos</span>
                        </li>

                    </Link>
                    <Link to='/historial' style={{ textDecoration: "none" }}>
                        <li className='li'>
                            <HiOutlineShoppingBag className="icon" />
                            <span className='span'>Compras</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <Link to='/perfil'>
                        <li className='li'>
                            <MdAccountCircle className="icon" />
                            <span className='span'>Perfil</span>
                        </li>
                    </Link>
                    {/* <li className='li'>
                        <BiLogOut className="icon" />
                        <span className='span'>Cerrar sesión</span>
                    </li> */}
                </ul>
            </div>

        </div>
    );
};

export default Sidebar