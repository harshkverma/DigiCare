
import '../DigiDataContact/style.scss'
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

export const DataContact = () => {
    const { t } = useTranslation();


    return (

        <div className="myprojects-data">
            <div id="project">

                <div className="overlapping-feature__container">
                    <div className="overlapping-feature">

                        <div className="overlapping-feature__image overlapping-feature--left">
                            <img src="https://res.cloudinary.com/dqdpwdoxs/image/upload/v1711151211/pbrdnacrqtnb4lx9chf4.jpg"></img>
                        </div>

                        <div className="overlapping-feature__content overlapping-feature--right overlapping-feature--center">
                            <div className="overlapping-feature--center">
                                <h2>Our Mission!</h2>
                                <p>"Welcome to DigiCare, a pioneering force in the digital transformation of hospitals. We specialize in revolutionizing healthcare institutions through innovative technological solutions tailored to meet the evolving needs of modern healthcare systems. <br /><br /> At DigiCare, we understand the challenges facing healthcare providers in today's dynamic landscape. Our mission is to empower hospitals with cutting-edge digital tools and strategies that enhance patient care, optimize operational efficiency, and drive positive outcomes. <br /><br /> With a team of experienced professionals and industry experts, we collaborate closely with hospitals to identify their unique requirements and design customized digital solutions. From implementing electronic health records (EHR) systems to integrating telemedicine platforms and leveraging artificial intelligence for predictive analytics, we offer a comprehensive suite of services aimed at transforming traditional healthcare delivery models. <br /><br /> </p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>



            <motion.div className="project-container" initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }} id="0" >
                <div className="project">
                    <div className="project-content ">
                        <h4 className="project-title ">{t("aboutData1.title")}</h4>
                        <div className="project-details">
                            <p dangerouslySetInnerHTML={{ __html: t("aboutData1.content") }}>
                            </p>
                        </div>
                    </div>
                    <div className="project-img ">

                        <img src="https://res.cloudinary.com/dqdpwdoxs/image/upload/v1711093132/pexels-rdne-stock-project-8292894_yzgfls.jpg" alt="" />
                    </div>
                </div>
            </motion.div>
            <motion.div className="project-container" initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}   >
                <div className="project">
                    <div className="project-content reverse-content">
                        <h4 className="project-title reverse-title">{t("aboutData2.title")}</h4>
                        <div className="project-details">
                            <p dangerouslySetInnerHTML={{ __html: t("aboutData2.content") }}>
                            </p>

                        </div>
                    </div>
                    <div className="project-img reverse-img">
                        <img src="https://res.cloudinary.com/dqdpwdoxs/image/upload/v1711091060/krztravrxj9qzybikynj.jpg" alt="" />
                    </div>
                </div>
            </motion.div>
            <motion.div className="project-container" initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }} id="0" >
                <div className="project">
                    <div className="project-content ">
                        <h4 className="project-title ">{t("aboutData3.title")}</h4>
                        <div className="project-details">
                            <p dangerouslySetInnerHTML={{ __html: t("aboutData3.content") }}>
                            </p>
                        </div>
                    </div>
                    <div className="project-img ">

                        <img src="https://res.cloudinary.com/dqdpwdoxs/image/upload/v1711093132/pexels-rdne-stock-project-8292894_yzgfls.jpg" alt="" />
                    </div>
                </div>
            </motion.div>



        </div>
    );
};



