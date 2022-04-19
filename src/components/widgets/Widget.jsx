import React from 'react'
import './widget.css'

function Widget() {
  return (
    <div className="widget">
        <div className="widgetItem">
          <div className="widgetItemCover">
            <img src="../../assets/img/veg.jpeg" alt="" className="" />
          </div>
          <div className="widgetItemTitle">Food Recipes</div>
          <div className="widgetItemChoice">discover</div>
        </div>
        
        <div className="widgetItem">
          <div className="widgetItemCover">
            <img src="../../assets/img/5.jpg" alt="" className="" />
          </div>
          <div className="widgetItemTitle">Wrokout</div>
          <div className="widgetItemChoice">discover</div>
        </div>
        
        <div className="widgetItem">
          <div className="widgetItemCover">
            <img src="../../assets/img/2.jpeg" alt="" className="" />
          </div>
          <div className="widgetItemTitle">Library</div>
          <div className="widgetItemChoice">discover</div>
        </div>
    </div>
  )
}

export default Widget