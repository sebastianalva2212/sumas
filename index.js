const express = requiere ('expres');
const app = express();
const morgan=requiere ('morgan');
const cors = requiere ('cors');

// confguraciones servidor 

app.set('port,process.env.PORT || 3000');
app.set('jsont spaces' , 2)

//mildleware
 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors()); //agrega el middleware CORS 

//