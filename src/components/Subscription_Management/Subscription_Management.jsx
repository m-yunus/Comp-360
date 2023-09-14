import React from 'react'
import "./Subscription_Management.css"

const Subscription_Management = () => {
  return (
    <>
      <div className="merit subs-mngmnt ">
        <button className="save-btn">Save</button>
        <div className="subs-mngmnt flex gap-20">
          <h2>Plan Name</h2>
          <input type="text" placeholder="Browse" />
        </div>
        <div>
            <ul>
                <li className='flex items-center'>
                    <p className='bg-red-500 w-[300px]'>1. Home page</p> <input type="checkbox" name="" id="" />
                    <span><p>Personalization</p></span>
                </li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Subscription_Management