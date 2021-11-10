use std::io;

fn main() {
    let mut input = String::new();
    
    io::stdin().read_line(&mut input).expect("oof");
    
    for _n in 0..3 {
        print!("{} ", input);
    }
}