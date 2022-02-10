  let coded = `
                <div class="col-md-3 col-sm-6 asd aqui">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#" class="image" style="background-color:#F3F3F3;">
                            <img class="pic-1" src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg">
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="#">Product Name</a></h3>
                            <!--
                                <div class="price">$21.60</div>
                                <ul class="rating">
                                  <li class="fas fa-star"></li>
                                  <li class="fas fa-star"></li>
                                  <li class="fas fa-star"></li>
                                  <li class="fas fa-star"></li>
                                  <li class="fas fa-star disable"></li>
                                </ul>-->
                        </div>
                        <div class="action-buttons">
                            <a class="btn-outline-icon"><i class="fas fa-shopping-cart"></i></a>
                            <a class="btn-outline-icon"><i class="fas fa-info"></i></a>
                            <a class="btn-outline-icon"><i class="fas fa-heart"></i></a>
                        </div>
                    </div>
                </div>`;

                let i = 0;
                let max = 23;
                let code = coded;
                let t = false;
                while(i<max){
                     code+=coded;
                    i++;
                    if(i=>max){
                        t = true;
                    }
                }
                if(t==true){
                    document.getElementById('change').innerHTML = code;
                }
                else{
                    //TODO
                }