fn main() {
    println!("Welcome to FizzBuzz!");
    let n = fizzbuzz();
}

fn fizzbuzz() -> i32 {
    let mut zz_buzz_n = 0;

   for n in 1..=301 {
        if n % 3 == 0 && n % 5 == 0 {
            println!("fizz buzz");
            zz_buzz_n += 1;
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }
    }
    zz_buzz_n
}
