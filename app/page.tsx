import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="Contener_Header">
        <h1>hello heder</h1>
      </header>

      <body>
        <nav className="Conterner_Nav">this is nav bar</nav>

        <main className="container_Body">

          <div className="Left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            a fugit ab labore animi quo eum explicabo quidem sed dicta. Veniam
            repellat dignissimos sint porro a tempore obcaecati debitis
            molestias.
          </div>

          <div className="Right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            explicabo porro totam. Similique quod, a quis, laborum provident
            harum eaque expedita repellat deleniti ut culpa nostrum? Vitae totam
            similique perspiciatis.
          </div>
          
        </main>
        
          <footer className="Footer_Contener">
          this is footer Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, sed.
          </footer>
      </body>

    </>
  );
}
