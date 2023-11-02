import works from './Works.module.css';
import { allImage } from '../data/data';
import { allCartData } from '../data/data';


const Works = () => {
    return (
        <div id='#works' className={works.main}>
           <div className={works.container}>
           <div className={works.workTitle}>
               {
                allImage.map(data => {
                    return (
                        <div key={data.id} className={works.container}>
                        <img style={{width:'45px', marginBottom:'15px'}} src={data.image} alt="" />
                        <br />
                       
                        <span className={works.titleWork}>{data.title}</span>
                        <br />
                        <br />
                        <span className={works.titleDes}>
                            {data.des}
                        </span>
                </div>
                    )
                } )
               }   
            </div>
            <div className={works.workImg}>
               {/* <div style={{width:'100%',paddingTop:'20px'}}>
                    <div className={works.whatWeDo}>
                    what We Do
                    </div>
               </div> */}
               <div className={works.workCards}>
                    {
                        allCartData?.map(data => {
                            return (
                                <div key={data.id} className={works.cartContainer}>
                                    <img src={data.image} alt="" />
                                    <div style={{width:'100%', position:'relative'}}>
                                        <div style={{width:'90px', height:'90px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', position:'absolute', left:'50%', top:'50%', background:'white', transform:'translate(-50%, -50%)'}}>
                                        <img style={{width:'50px', height:'50px',}} src={data.logo} alt="" />
                                        </div>
                                    </div>
                                    <br />
                                    <p style={{textAlign:'center', fontWeight:'bold', marginTop:'30px', marginBottom:'0'}}>{data.title}</p>
                                    <p style={{fontSize:'12px', padding:'10px', textAlign:'justify'}}>{data.des}</p>
                                </div>
                            )
                        })
                    }
               </div>
            </div>
           </div>
        </div>
    );
};

export default Works;

