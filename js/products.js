import { products } from './service.js';

const productString = `<div class="product">
        <div class="main-content">
            <div class="body">
                <div class="images">
                    <img src="" class="product-img-1"
                        alt="">
                    <img src="" class="product-img-2"
                        alt="">
                </div>
                <div class="content">
                    <h2 class="heading"></h2>
                    <p class="desc"></p>
                    <a href="#!" class="btn btn-primary">Chi tiết</a>
                </div>
            </div>
        </div>
    </div>`;

function embedDesc(parentElement, classDesc, contentArr) {
    const headingElement = parentElement.querySelector(classDesc);
    if (!headingElement) return;
    let desc = '';
    for (let i = 0; i < 4; i++) {
        desc = desc + contentArr[i];
    }
    headingElement.innerHTML = desc;
}

function embedContent(parentElement, classHeading, content) {
    const headingElement = parentElement.querySelector(classHeading);
    if (!headingElement) return;
    headingElement.textContent = content;
}

function embedImg(parentElement, classImg, url, index) {
    if (!parentElement) return;
    const imgElement = parentElement.querySelector(classImg);
    if (!imgElement) return;
    imgElement.src = url;
    if (index === 0 && classImg === '.product-img-1') {
        imgElement.classList.add('lower');
    } if (index !== 0 && classImg === '.product-img-2') {
        imgElement.classList.add('lower');
    } else {
        return;
    }
}




function createProductElement(product, index) {
    const divElement = document.createElement('div');
    divElement.innerHTML = productString;
    const productElement = divElement.firstElementChild;
    if (index % 2 !== 0) {
        productElement.classList.add('product-reverse');
    }
    embedImg(productElement, '.product-img-1', product.urlImg1, index);
    embedImg(productElement, '.product-img-2', product.urlImg2, index);
    embedContent(productElement, '.heading', product.productName);
    embedDesc(productElement, '.desc', product.feature);
    return productElement;
}


function renderProducts(productList) {
    const productListElement = document.getElementById('product-list');
    if (!productListElement) return;
    productList.forEach((product, index) => {
        const productElement = createProductElement(product, index);
        if (!productElement) return;
        productListElement.appendChild(productElement);
    });

}


function changeDot(dotsElement, dotElement, dotListElement) {
            const idDot = dotElement.id;
            console.log(idDot);
            dotsElement.id = idDot;
            dotElement.classList.add('active');
            dotListElement.forEach((dot, index) => {
                if (dot.id !== idDot) {
                    dot.classList.remove("active");
                }
});
}

function surfAuto() {
    const dotsElement = document.querySelector('.dots');
    if (!dotsElement) return;
    const dotListElement = dotsElement.querySelectorAll('.dot');
    if (!dotListElement) {
        return;
    }

  
    

    let i = 0;
    let intervalId = setInterval(function() {
        const feedbackParentElement = document.querySelector('.feedback-list');
        if(feedbackParentElement.getAttribute("data-direction") === 'ltr'){
            i++;
            const id = feedbackParentElement.getAttribute("data-id");
            dotListElement.forEach((dotElement, index) => {
                if (id === dotElement.id) {
                    surfFeedBack(i);
                    
                    changeDot(dotsElement, dotListElement[i], dotListElement);
                    feedbackParentElement.setAttribute("data-id", i);
                }
            });
            if(i === dotListElement.length-1) {
                feedbackParentElement.setAttribute("data-direction", 'rtl') ;
            }
        } else {
            console.log('ok');
            i--;
            const id = feedbackParentElement.getAttribute("data-id");
            dotListElement.forEach((dotElement, index) => {
                if (id === dotElement.id) {
                    surfFeedBack(-i);
                    changeDot(dotsElement, dotListElement[i], dotListElement);
                    feedbackParentElement.setAttribute("data-id", i);
                }
            });
            
            if(i <= 0) {
                feedbackParentElement.setAttribute("data-direction", 'ltr') ;
            }
        }
        console.log('i :' +i);
        console.log('interval: '+intervalId);
        dotsElement.setAttribute("data-interval", intervalId);
      }, 4500);

}


function surfFeedBack(index) {
    const feedbacksElement = document.querySelector('.feedback-list');
    if (!feedbacksElement) return;
    const width = feedbacksElement.getBoundingClientRect().width;
    if(index > 0) {
        feedbacksElement.style.transform = 'translateX(-' + index * width + 'px)';

    } else {
        feedbacksElement.style.transform = 'translateX(' + index * width + 'px)';
    }

}



async function eventListenerForDot() {
    const dotsElement = document.querySelector('.dots');
    console.log(dotsElement);

    if (!dotsElement) return;
    const dotListElement = dotsElement.querySelectorAll('.dot');
    if (!dotListElement) {
        return;
    }
    const feedbackParentElement = document.querySelector('.feedback-list');
    if(!feedbackParentElement)return;

    dotListElement.forEach((dotElement, index) => {
        dotElement.addEventListener("click", () => {
            if (dotElement.id === dotsElement.id) return;
            if(dotElement.id === 0) {
                feedbackParentElement.setAttribute("data-direction", 'ltr') ;

            } 

            if(dotElement.id=== dotListElement.length-1) {
                feedbackParentElement.setAttribute("data-direction", 'rtl') ;
            }
            
            surfFeedBack(index);
            changeDot(dotsElement, dotElement, dotListElement);
           
    const feedbacksElement = document.querySelector('.feedback-list');
    if(!feedbacksElement) return;
    feedbacksElement.setAttribute("data-id", index);
        });
    });

}



(() => {
    const productList = [...products];
    renderProducts(productList);
    surfAuto();
    eventListenerForDot();
    
})();