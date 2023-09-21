import { Outlet } from 'react-router';
import Footer from '../pages/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <section className='flex justify-between px-20 py-8 shadow-lg'>
                <div className='text-3xl font-bold'>Amajhon</div>
                <nav className=''>
                    <ul className='flex gap-5 text-2xl font-semibold'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </section>

            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            
           <Footer></Footer>

        </div>
       
    );
};

export default MainLayOut;