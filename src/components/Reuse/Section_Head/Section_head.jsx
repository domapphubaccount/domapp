

export default function Section_head({heads,title_1,title_2,des_1,des_2,sectionId}) {
  return (
    <div className="section_head" data-aos="fade-right" data-aos-duration="3000" id={sectionId}>
        {heads === 1 ?
        <div className="step_1">
            <h3>{title_1}</h3>
            <p>
                {des_1}
            </p>
        </div>
        :
        <>
        <div className="step_1">
            <h3>{title_1}</h3>
            <p>
                {des_1}
            </p>
        </div>
        <div className="step_2">
            <h3>
                {title_2}
            </h3>
            <p>
                {des_2}
            </p>
        </div>
        </>
    }
    </div>
  )
}
