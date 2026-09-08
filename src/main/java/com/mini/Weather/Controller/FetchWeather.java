package com.mini.Weather.Controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Map;


@RestController
@RequestMapping("/weather")
public class FetchWeather {

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping(value = "fetch", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> fetchWeather(@RequestParam Map<String, String> request) {
        String city = request.get("city");
        String api = "Your_API";
        String url = "http://api.weatherstack.com/current?access_key="+api+"&query="+city;

        try{
            String rawdata =  restTemplate.getForObject(url, String.class);
            return ResponseEntity.ok(rawdata);
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("{\"error\": \"Failed to fetch weather data\"}");
        }
    }
}
