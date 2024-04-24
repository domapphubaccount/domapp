import Image from 'next/image'
import React from 'react'
import { Container } from 'reactstrap'
import Icon_1 from "@/assets/images/Products_Page/Chat/start_icons/icon_1.svg"
import Icon_2 from "@/assets/images/Products_Page/Chat/start_icons/icon_2.svg"
import Icon_3 from "@/assets/images/Products_Page/Chat/start_icons/icon_3.svg"
import Icon_4 from "@/assets/images/Products_Page/Chat/start_icons/icon_4.svg"

export default function Section_2() {
  return (
    <section>
        <Container>
        <div className='d-flex justify-content-center flex-wrap chat_cards_container mb-5'>
            <div className='my-5'>
            <div className='chat_amaizing_card' data-aos="fade-up">
                <div className='card_content'>

                    <div className='card_data_container card_shadow'>
                        <div className='icon_card_data'>
                            <div className='content_icon'>
                                <Image src={Icon_1} alt="icon_chat" style={{width:'50px',height:'50px'}}/>
                            </div>
                        </div>

                        <div className='text-center fw-bold'>
                            <h4>
                                Support
                            </h4>
                            <p>
                                Enhance customer interaction, lead quality, and communication 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='my-5'>
            <div className='chat_amaizing_card_2'>
                <div className='card_content'>

                    <div className='card_data_container card_shadow'>
                        <div className='icon_card_data'>
                            <div className='content_icon'>
                                <Image src={Icon_2} alt="icon_chat" style={{width:'50px',height:'50px'}}/>
                            </div>
                        </div>

                        <div className='text-center fw-bold text-data'>
                            <h4>
                                Archive
                            </h4>
                            <p>
                            Store and retrieve chat transcripts seamlessly
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='my-5'>
            <div className='chat_amaizing_card_3' data-aos="fade-up">
                <div className='card_content'>

                    <div className='card_data_container card_shadow'>
                        <div className='icon_card_data'>
                            <div className='content_icon'>
                                <Image src={Icon_3} alt="icon_chat" style={{width:'50px',height:'50px'}}/>
                            </div>
                        </div>

                        <div className='text-center fw-bold'>
                            <h4>
                            Auto-reply
                            </h4>
                            <p>
                            Customized automated reply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='my-5'>
            <div className='chat_amaizing_card_4' >
                <div className='card_content'>

                    <div className='card_data_container card_shadow'>
                        <div className='icon_card_data'>
                            <div className='content_icon'>
                                <Image src={Icon_4} alt="icon_chat" style={{width:'50px',height:'50px'}}/>
                            </div>
                        </div>

                        <div className='text-center text-data fw-bold'>
                            <h4>
                            Secure Communication
                            </h4>
                            <p>
                            Guarantee end-to-end encryption for every communication.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </Container>
    </section>
  )
}
