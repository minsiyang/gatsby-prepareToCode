import React from "react"
import style from "./LandingPage.module.css"
import logoImage from "../../../static/makers-logo-lockupv-black-2.png"

export default function LandingPage() {
  return <div className = {style.headers}>
          <p> Prepare <br/> to <strong className ={style.bold}>code</strong> </p>
          <h3 className={style.osOption}>Pick your operating system</h3>
          <div>
              <button>OS X</button>
          </div>
          <img src = {logoImage}></img>
        </div>
}
