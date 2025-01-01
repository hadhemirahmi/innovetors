import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Nav from '../componets/nabar';
function Hom(){
return(
    <div>
    <Nav/>
    <section class="hero-section">
    <div class="container">
      <h1 class="hero-title">INNOVATORS PROJECT</h1>
      <div class="row mt-4">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <p>
            Our mission is to utilize the internet as a creative medium to bring your brand's vibrant story to life.
          </p>
        </div>
        <div class="col-md-6">
          <img src="illustration.jpg" alt="Illustration" class="illustration"/>
        </div>
      </div>
    </div>
  </section>
    </div>
   
)
}
export default Hom