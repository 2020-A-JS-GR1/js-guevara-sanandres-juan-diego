const promise_read_file = new Promise();
const promise_write_file = new Promise();

async function exercise() {
    console.log('1');
    try{
        const file_content = await promise_read_file();
        await promise_write_file();
        const new_file_content = await promise_read_file();
        console.log(new_file_content);
    }catch (e) {
        console.error(e);
    }
}

const fun = async ()=>{

};
