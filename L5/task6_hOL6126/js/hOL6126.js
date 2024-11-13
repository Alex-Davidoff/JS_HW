let write_text_in_ul = (input_text,repeats) =>{
    document.write('<ul>');
    for (let c = 0; c<repeats; c++){
        document.write('<li>'+input_text+'</li>');
    }
    document.write('</ul>');
}

const tval = write_text_in_ul('test text',3);
const tval2 = write_text_in_ul('test text',4);