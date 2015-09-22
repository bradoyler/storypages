function storiesConfig() {

    var shared ={
        site:'My Blog',
        domain:'bradoyler.com',
        analyticsId:'GA-123123'
    };

    var stories = {
        story1:{
            title:'Story 1',
            authors:[{name:'Brad Oyler', email:'', fb:'', twitter:'', www:''}],
            viewModel:{
                body:[
                    {type:'h1', html:'Headline for story 1'},
                    {type:'h2', html:'sub heading for story 1'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                ]
            }
        },
        story2:{
            title:'Story 2',
            authors:[{name:'Brad Oyler', email:'', fb:'', twitter:'', www:''}],
            viewModel:{
                body:[
                    {type:'h1', html:'Headline for story 2'},
                    {type:'h2', html:'sub heading for story 2'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                    {type:'p', html:' Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'},
                ]
            }
        }
    };

    return {shared:shared, stories:stories};
};

module.exports = storiesConfig();