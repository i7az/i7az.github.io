import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from './term';
import './index.scss';

class App extends React.Component {
    
    render () { 
        return (
            <div style={{
                margin:"0 auto",
                width:640
            }}>
                <div style={{
                    top:0,
                    width: "100%",
                    fontSize:14,
                }}>
                    <h1 className="title" style={{
                        font:"48px/1.2 'Monoton', cursive;"
                    }}>Taz</h1>
                    <p>Seeking for opportunity that make the world different, You only live once.</p>
                </div>
                <div  
                style={{
                    top:0,
                    height:480,
                    width:640
                }}
                >
                    <Terminal ></Terminal>
                </div>
            </div>
        )
    }
};


ReactDOM.render(<App></App>, document.getElementById("app"));

export default App;