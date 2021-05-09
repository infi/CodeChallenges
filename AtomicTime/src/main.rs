const NTP_ADDRESS: &str = "0.pool.ntp.org:123";

fn main() {
    let response_raw = ntp::request(NTP_ADDRESS);

    match response_raw {
        Err(e) => {
            println!("Could not connect to the NTP server: {}", e);
        }
        Ok(response) => {
            let ntp_time = response.transmit_time;
            println!("{}", ntp_time);
        }
    }
}
