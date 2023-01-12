import Slider from './slider';
export default class MainSlider extends Slider{
    constructor(page, btns) {
        super(page, btns);
    }
    showSlides(n){
        this.slides.forEach(element => {
            element.style.display = 'none';
        });
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        };
       
        try{
            if(n===3){
                document.querySelector('.hanson').classList.add('animate__animated')

                setTimeout(()=>{
                    document.querySelector('.hanson').style.display = 'block';
                    document.querySelector('.hanson').classList.add('animate__slideInUp');

                },3000);
            } else {
                document.querySelector('.hanson').style.display = 'none';
                document.querySelector('.hanson').classList.remove('animate__slideInUp');

            }
        } catch(e){};

        this.slides[this.slideIndex-1].style.display = 'block';
    }

    plusSlides(n){
        this.showSlides(this.slideIndex += n);
    }

    render(){
     

        this.btns.forEach(element =>{
            element.addEventListener('click', ()=>{
                this.plusSlides(1);
            });
            element.parentNode.previousElementSibling.addEventListener('click', (e)=>{
                e.preventDefault();
                this.slideIndex=1;
                this.showSlides(this.slideIndex);
            })
        })
       
       

        this.showSlides(this.slideIndex);
    }
}

