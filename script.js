let first_button=document.getElementById("first_button");
let create_button=document.getElementById("create_button");
function three(){
    let ihtml="";
    ihtml=` <div class="card" style="width: 18rem;">
        <img src="https://i.pinimg.com/736x/51/81/9c/51819c0566eb155d5f90f9d4967da4ee.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">This is to Create</h5>
    <p class="card-text"></p>
<a href="create.html" class="btn btn-primary">Click here to Create your Todo</a>
</div>
</div>`;
cardContainer.innerHTML=ihtml;

    ihtml+=` <div class="card" style="width: 18rem;">
        <img src="https://i.pinimg.com/736x/51/81/9c/51819c0566eb155d5f90f9d4967da4ee.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">This is to Access</h5>
    <p class="card-text"></p>
<a href="access.html" class="btn btn-primary">Click here to Access your Todo</a>
</div>
</div>`;
cardContainer.innerHTML=ihtml;

    ihtml+=` <div class="card" style="width: 18rem;">
        <img src="https://i.pinimg.com/736x/51/81/9c/51819c0566eb155d5f90f9d4967da4ee.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">This is to Delete</h5>
    <p class="card-text"></p>
<a href="delete.html" class="btn btn-primary">Click here to Delete your Todo</a>
</div>
</div>`;
cardContainer.innerHTML=ihtml;
}
first_button.addEventListener("click",three);