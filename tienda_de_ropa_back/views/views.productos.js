function ListaDeProductos(productos) {
    let html = ""
    html += "<div class='container'>"
    html += "<a class='btn btn-outline-success mb-3 w-100' href='/producto/nuevo'>Nueva Ropa</a>"
    html += "<div class='row justify-content-center'>"

    productos.forEach(producto => {
        html += "<div class='col-md-4 col-lg-3 col-sm-12 mb-4'>"
        html += "<div class='card h-100'>"
        html += "<img class='card-img-top img-fluid' src='/img/" + producto.img + "' alt='" + producto.name + "'>"
        html += "<div class='card-body'>"
        html += "<h5 class='card-title fs-2 fw-bold'>" + producto.name + "</h5>"
        html += "<p class='fs-6 m-0 fw-bold text-primary'>" + producto.category + "</p>"
        html += "<p class='m-0 text-danger'>" + producto.materials.join(', ') + "</p>"
        html += "<p class='m-0 fw-bold fs-1 text-primary text-center'>$ " + producto.price + "</p>"
        html += "</div>"
        html += "<div class='card-footer text-center'>"
        html += "<a class='btn btn-outline-primary w-100' href='/productos/" + producto._id + "'>Ver</a>"
        html += "</div>"
        html += "</div>"
        html += "</div>"
    })

    html += "</div>"
    html += "</div>"
    return html
}

function CrearPagina(titulo, contenido) {
    return `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

            <link rel="icon" href="../img/Favicon.svg">
        <title>JKV - ${titulo}</title>
        </head>
        <body class="">
            <header class='text-center bg-dark text-light p-4 mb-4'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary rounded  w-50 mx-auto" id="menu">
                    <div class="container-fluid m-auto">
                        <button class="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon p-3"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item ms-3"><a class="nav-link contenido links" href="/productos">Todos los productos</a></li>
                                <li class="nav-item ms-3 dropdown"><a class="nav-link contenido links" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias <i class="fa-solid fa-circle-chevron-down text-primary"></i></a>
                                    <ul class="dropdown-menu dropdown-menu dropdown-menu-lg-center p-2">
                                        <li><a class="dropdown-item rounded contenido" href="/productos">Todo</a></li>
                                        <hr class="dropdown-divider">
                                        <li><a class="dropdown-item rounded" href="/categoria/ropa casual">Ropa Casual</a></li>
                                        <li><a class="dropdown-item rounded" href="/categoria/ropa formal">Ropa Formal</a></li>
                                        <li><a class="dropdown-item rounded" href="/categoria/ropa exterior">Ropa Exterior</a></li>
                                        <li><a class="dropdown-item rounded" href="/categoria/ropa deportiva">Ropa Deportiva</a></li>
                                        <li><a class="dropdown-item rounded" href="/categoria/accesorios">Accesorios</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item ms-3 dropdown"><a class="nav-link contenido links" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Materiales <i class="fa-solid fa-circle-chevron-down text-primary"></i></a>
                                    <ul class="dropdown-menu dropdown-menu dropdown-menu-lg-center p-2">
                                        <li><a class="dropdown-item rounded contenido" href="/productos">Todo</a></li>
                                        <hr class="dropdown-divider">
                                        <li><a class="dropdown-item rounded" href="/materials/Algodón">Algodón</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Lino">Lino</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Seda">Seda</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Poliéster">Poliéster</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Cuero">Cuero</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Mezclilla">Mezclilla</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Plumas">Plumas</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Nylon">Nylon</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Lana">Lana</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Goma">Goma</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Elastano">Elastano</a></li>
                                        <li><a class="dropdown-item rounded" href="/materials/Paja">Paja</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div class="container">
                    ${contenido}
                </div>
            </main>
            <footer class='bg-primary text-light text-center p-3 mt-3'>JKV - Joaquin Preiti - Victoria Taño</footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </body>
    </html>
    `
}


function CrearDetalle(producto) {
    return `
       <div class='container mx-auto'>
            <h2 class="text-center fw-bold text-primary my-5"> ${producto.name} </h2>
            <div class='card w-50 mx-auto'>
                <a class='btn btn-outline-secondary me-md-3  mb-3 w-100' href='/productos'>Atras</a>
                <img class='card-img-top' src='../img/${producto.img}' alt='${producto.name}'>
                <div class='card-body'>
                    <h5 class='card-title fs-2 fw-bold'>${producto.name}</h5>
                    <p class='fs-6 m-0 fw-bold text-primary'>${producto.category}</p>
                    <p class='m-0 text-danger'>${producto.materials.join(', ')}</p>
                    <hr class='my-4' style='border: 2px line'>
                    <p> ${producto.description} </p>
                </div>
                <div class='card-footer text-center'>
                    <p class='m-0 fw-bold fs-1 text-primary mb-3'>$ ${producto.price}</p>
                    <div class='d-md-flex'>
                        <a class='btn btn-outline-warning me-md-3  mb-3 w-100' href='../producto/modificar/${producto._id}'>Editar</a>
                        <a class='btn btn-outline-danger ms-md-3 mb-3 w-100' href='../producto/eliminar/${producto._id}'>Eliminar</a>
                    </div>
                </div>
            </div>
       </div>
    `
}


function nuevaRopa(materiales, categorias) {
    let html = '';

    return `
            <div class='container mx-auto'>
                <h2 class="fw-bold text-primary">Agregar ropa</h2>
                <div class="row mb-5 d-flex justify-content-center align-items-center">
                    <form action="/producto/nuevo" method="POST" class="row">
                        <div class="col-md-12 mb-3">
                            <label for="img" class="form-label fw-bold">Imagen del producto</label>
                            <input class='form-control mb-3' type="file" name="img" id="img">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="name" class="form-label">Nombre del producto</label>
                            <input class='form-control mb-3' type="text" name="name" placeholder="Nombre del producto">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="price" class="form-label">Precio del producto</label>
                            <input class='form-control mb-3' type="number" name="price" placeholder="Precio del producto">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="materials" class="form-label">Materiales</label>
                            <div class="row ms-1"> 
                            ${materiales.map(material => `
                                <div class="form-check col-md-2 col-4">
                                    <input class="form-check-input" type="checkbox" name="materials" value="${material}" id="${material}">
                                    <label class="form-check-label" for="${material}">
                                        ${material}
                                    </label>
                                </div>
                            `).join('')}
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="category" class="form-label">Categoría</label>
                            <select class="form-control mb-3" name="category" id="category">
                                ${categorias.map(categoria => `
                                    <option value="${categoria}">${categoria}</option>
                                `).join('')}
                            </select>
                        </div>
                        <div class="col-md-12 mb-3">
                            <label for="description" class="form-label">Descripción del producto</label>
                            <textarea class="form-control" name="description" id="description" rows="3"></textarea>
                        </div>
                        <div class="container d-flex">
                            <button type="submit" class='btn btn-primary w-100'>Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
}

function modificarRopa(ropa, materiales, categorias) {
    return `
    <div class='container mb-3'>
        <h2 class="text-primary fw-bold">Modificar ropa</h2>
        <form action="../../producto/modificar/${ropa._id}" method="POST" class="row">
            <div class="col-md-6 mb-3">
                <label for="name" class="form-label fw-bold">Nombre del producto</label>
                <input class='form-control mb-3' value="${ropa.name}" type="text" name="name" placeholder="Nombre">
            </div>
            <div class="col-md-6 mb-3">
                <label for="price" class="form-label fw-bold">Precio del producto</label>
                <input class='form-control mb-3' value="${ropa.price}" type="number" name="price" placeholder="Precio">
            </div>
            <div class="col-md-6 mb-3">
                <label for="img" class="form-label fw-bold">Imagen del producto</label>
                <input class='form-control mb-3' value="${ropa.img}" type="file" name="img" id="img">
                <div class="card mx-auto w-50">
                    <img class='card-img-top rounded' src='../../img/${ropa.img}' alt='${ropa.name}'>
                </div>
            </div>
             <div class="col-md-6 mb-3">
                <label for="description" class="form-label fw-bold">Descripción del producto</label>
                <textarea class="form-control" name="description" id="description" rows="3">${ropa.description}</textarea>
                <label for="category" class="form-label fw-bold mt-3">Categoría</label>
                <select class="form-control" name="category" id="category">
                    ${categorias.map(categoria => `
                        <option value="${categoria}" ${ropa.category === categoria ? "selected" : ""}>${categoria}</option>
                    `).join('')}
                </select>
                <label for="materials" class="form-label fw-bold mt-3">Materiales</label>
                <div class="row ms-1">
                    ${materiales.map(material => `
                        <div class="form-check col-md-2 col-3 me-1">
                            <input class="form-check-input" type="checkbox" name="materials" value="${material}" id="${material}" 
                            ${ropa.materials.includes(material) ? "checked" : ""}>
                            <label class="form-check-label" for="${material}">
                                ${material}
                            </label>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="mb-3">
            </div>

            <div class="container d-flex">
                <button type="submit" class='btn btn-primary me-3 w-50'>Modificar</button>
                <a href="/productos" class='btn btn-outline-secondary ms-3 w-50'>Atrás</a>
            </div>
        </form>
    </div>
    `;
}



export {
    CrearPagina, ListaDeProductos, CrearDetalle, nuevaRopa, modificarRopa
}