import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


import Container from '@material-ui/core/Container';

const App = () => {
    return (

        // =================Code using teacher methods =========================
        // <div className="ui comments container">
        //     <ApprovalCard > 
        //         <CommentDetail 
        //             author="Sam" 
        //             timeAgo="Today at 4:50PM"  
        //             body="Third comment" 
        //             avatar={faker.image.people()}
        //         />
        //     </ApprovalCard>

        //     <ApprovalCard >
        //         <CommentDetail 
        //             author="Rahul" 
        //             timeAgo="Yesterday at 2:50PM" 
        //             body="Second comment" 
        //             avatar={faker.image.people()}
        //         />
        //     </ApprovalCard>
          
        //     <ApprovalCard>
        //         <CommentDetail 
        //             author="Prabhash" 
        //             timeAgo="Today at 12:50AM" 
        //             body="First comment" 
        //             avatar={faker.image.people()}
        //         />
        //     </ApprovalCard>
           
        // </div>

        // ================================My Way ==========================================
        <>
            <Container maxWidth="lg" style={{border:"1px solid red"}}>
                <CommentDetail author="Alex" body="Great blog post" avatar={faker.image.people()} createdAt="Todat at 5:00"/>
                <CommentDetail author="Sam" body="Informative" avatar={faker.image.people()} createdAt="Todat at 7:51"/>
                <CommentDetail author="Jane" body="Looks greate" avatar={faker.image.people()} createdAt="Todat at 9:01"/>

            </Container>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))