import React from 'react';
import path from 'path';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import ejs from 'ejs';
import App from './src/index';

ejs.renderFile(path.join(path.resolve(__dirname, 'static' ), 'index.html'), 
    {   // data
        app: renderToString(React.createElement(App))
    },
    {   // options
    },
    (err, str) => {
        if (err) {
            console.log(err);
        }
        else 
        {
            let dist = path.resolve(__dirname);
            fs.writeFileSync(path.join(__dirname, 'index.html'), str);
        }
    }
);