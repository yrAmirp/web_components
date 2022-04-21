import { LitElement, html, css } from "lit-element";

const icons = {
  "udemi" : "../assets/img/udemi.svg",
  "domznanii": "../assets/img/domZnanii.svg"
}

export class CourseCard extends LitElement{
  static get styles(){
    return css`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .s{
        width: 384px;
      }
      .m{
        width: 586px;
      }
      .l{
        width: 788px;
      }
      .card {
        position: relative;
        font-family: 'Manrope', sans-serif;
        display: flex;
        flex-direction: column;
        border: 1px solid #E8E9ED;
        box-sizing: border-box;
        border-radius: 16px;
        padding: 20px;
        background: #FFFFFF;
        text-decoration: none;
        cursor: pointer;
      }
      .card:hover{
        outline: 2px solid #4378FE;
      }
      .card:hover::after{
        content: "";
        position: absolute;
        display: block;
        width: 24px;
        height: 24px;
        top: 20px;
        right: 20px;
        background: url("../assets/img/arrow.svg") no-repeat;
      }
      .card__features {
        display: flex;
        flex-wrap: wrap;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #132247;
        margin-bottom: 10px;
        margin-right: 60px;
      }
      .feature {
        background: #F2F3F3;
        border-radius: 40px;
        padding: 4px 8px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
      .feature:last-child{
        margin-right: 0px;
      }
      .feature_rating{
        display: flex;
        align-items: center;
      }
      .rating-value{
        vertical-align: bottom;
        color: #111;
        margin
      }
      .rating-star{
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url("../assets/img/ratingStar.svg") no-repeat;
        margin-right: 4px;
      }
      .card__title {
        font-weight: 600;
        font-size: 32px;
        line-height: 44px;
        color: #070C19;
        margin-bottom: 20px;
      }
      .card__info {
      }
      .info-card {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.5px;
        color: #9C9EA3;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }
      .info-card__price {
        margin-right: 50px;
        display: flex;
        flex-direction: column;
      }
      .info-card__price-key {
        
      }
      .info-card__price-value {
        font-size: 16px;
        line-height: 24px;
        color: #070C19;
      }
      .info-card__amount-lessons {
        display: flex;
        flex-direction: column;
      }
      .info-card__amount-lessons-key {
      }
      .info-card__amount-lessons-value {
        font-size: 16px;
        line-height: 24px;
        color: #070C19;
      }
      .info-card__icons {
        display: flex;
        flex-wrap: wrap;
        justify-self: flex-end;
        align-self: flex-end;
        margin-left: auto;
      }
      .card-icon {
        margin-right: 10px;
      }
      .card-icon:last-child{
        margin-right: 0px;
      }
    `
  }
  static get properties(){
    return{
      size: {type: String},
      titleCourse: {type: String},
      price: {type: String},
      amountLessons: {type: String},
      durationLessons: {type: String},
      features: {
        type: Array,
        converter: {
          fromAttribute: (val) => {

            val = val.replace(/^ +| +$|( ) +/g)
            return val.split(',');
          }
        },
        reflect: true,
      },
      rating: {type: String},
      icons: {
        type: Array,
        converter: {
          fromAttribute: (val) => {
            val = val.replace(/\s/g,"").toLowerCase();
            return val.split(',');
          }
        },
        reflect: true,
      },
    }
  }

  render(){
    return html`
      <a href="" class="card ${this.size}">
        <div class="card__features">
          ${this.features.map((val) => {
            console.dir(this);
            
            return html`
              <div class="feature">${val}</div>
            `
          })
          }
          <div class = "feature feature_rating"><span class="rating-star"></span><span class="rating-value">${this.rating}</span></div>
        </div>
        <h3 class="card__title">${this.titleCourse}</h3>
        <div class="card__info info-card">
          <div class="info-card__price">
            <span class="info-card__price-key">Цена:</span>
            <span class="info-card__price-value">${this.price} ₽, за 1 занятие</span>
          </div>
          <div class="info-card__amount-lessons">
            <span class="info-card__amount-lessons-key">Кол-во занятий:</span>
            <span class="info-card__amount-lessons-value">${this.amountLessons} занятий по ${this.durationLessons} минут</span>
          </div>
          <div class="info-card__icons">
            ${this.icons.map((iconName) => {
              console.log(iconName);
              
              for(const key in icons){
                if(iconName === key){
                  return html`<div class="card-icon">
                        <img src="${icons[key]}"/>
                  </div>`
                }
              }
            })}
          </div>
        </div>
      </a>
    `;
  }
  

  constructor(){
    super();
    this.size = "s";
    this.titleCourse = "Курс...";
    this.price = "...";
    this.amountLessons = "...";
    this.durationLessons = "...";
    this.features = [];
    this.icons = [];
    this.rating = "0.0";
  }
}

customElements.define("course-card", CourseCard);