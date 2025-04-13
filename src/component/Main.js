import React from 'react'

function Main(props) {
  return (
    <div>
      <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div>
                <img className='w-100' style={{height:"60vh",objectFit:"cover"}} src="https://thumbs.dreamstime.com/b/two-vivid-love-birds-cuddle-cherry-branch-embracing-beauty-spring-blooms-against-soft-background-348890985.jpg" alt="" />
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className='pt-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit blanditiis atque quia maxime voluptatem dolores nemo numquam perferendis, reprehenderit assumenda, doloribus quasi provident tempore debitis consectetur rem ratione, aspernatur adipisci iusto modi sunt vero odio? Illo inventore at obcaecati!
                </p>
                <p>{props.title}</p>
                <div id='main-1'  style={{backgroundColor:"black",height:"80px",width:"100%"}}>

                </div>
                <button className='btn btn-danger mt-3' onClick={props.buton}>change color</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Main
