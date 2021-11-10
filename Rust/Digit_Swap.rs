use std::io;

fn main() {
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("oof");
    
    for n in input.chars().rev() {
        print!("{}", n);
    }
}