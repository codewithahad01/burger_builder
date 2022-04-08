import React from 'react'
import Aox from '../../hoc/Aox'
import classes from './Layout.css'

const layout = (props) => (
    <Aox>
        <div>
            Toolbar,
            Sidedrawer,
            backloop
        </div>
        <main className={classes.Content}>
                {props.children}
        </main>
    </Aox>
    
)

export default layout