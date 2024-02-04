import React from "react";

export const About = () => {
  return (
    <div className="container-fluid py-5 blurred-bg d-flex justify-content-center">
      <div className="article_content p-3">
        <div className="row">
          <div className="col text-center">
            <h1>About</h1>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12 col-md-4">
            <img
              className="img-fluid content-img"
              src="https://picsum.photos/id/217/300"
              alt=""
            />
          </div>
          <div className="col-sm-12 col-md-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            molestias iure libero error repudiandae, aut doloremque corrupti sed
            iusto, hic recusandae eligendi provident aspernatur nobis asperiores
            minus autem nemo a. Temporibus sint, amet alias consequatur fugiat
            ipsa eos repellendus inventore, repellat dolore ducimus impedit unde
            deleniti ipsam numquam delectus quisquam necessitatibus error
            maiores. Temporibus neque dolores fuga, nesciunt quisquam dolorem.
            <div className=""></div> 
          </div>
         
        </div>
        <div className="row">
          <div className="col-12 text-center m-1"><i class="fa-solid fa-mountain-sun"></i></div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12 col-md-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            molestias iure libero error repudiandae, aut doloremque corrupti sed
            iusto, hic recusandae eligendi provident aspernatur nobis asperiores
            minus autem nemo a. Temporibus sint, amet alias consequatur fugiat
            ipsa eos repellendus inventore, repellat dolore ducimus impedit unde
            deleniti ipsam numquam delectus quisquam necessitatibus error
            maiores. Temporibus neque dolores fuga, nesciunt quisquam dolorem.
          </div>
          <div className="col-sm-12 col-sm-12 col-md-4">
            <img
              className="img-fluid content-img"
              src="https://picsum.photos/id/190/300"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
