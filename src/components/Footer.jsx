import React from 'react'
import '../styles/footer.css'
const Footer = () => {
  return (
    <footer>
        <div className='first'>
            <img src="./images/Logo.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis autem quibusdam vel dolore atque ex officia. Vitae, iure ipsa?</p>
        </div>
        <div className='second'>
            <h4>Products</h4>
            <ul>
                <li>E-commerce</li>
                <li>Social media</li>
                <li>Logistics</li>
                <li>ERM</li>
                <li>School management</li>
            </ul>
        </div>
        <div className='third'>
        <h4>Products</h4>
            <ul>
                <li>E-commerce</li>
                <li>Social media</li>
                <li>Logistics</li>
                <li>ERM</li>
                <li>School management</li>
            </ul>
        </div>
        <div className='fourth'>
        <h4>Products</h4>
            <ul>
                <li>E-commerce</li>
                <li>Social media</li>
                <li>Logistics</li>
                <li>ERM</li>
                <li>School management</li>
            </ul>
        </div>
        <div className='fifth'>
            <div className="input-cont">
                <input type="search" placeholder='search'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="icons-cont">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-github"></i>
            </div>
        </div>
    </footer>
  )
}

export default Footer