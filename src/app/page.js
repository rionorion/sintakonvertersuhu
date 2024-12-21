"use client";

import { useState } from "react";
import './styles.css'; // Import file CSS

// Function untuk mengonversi suhu dari Celcius ke Fahrenheit
function celciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

// Function untuk mengonversi suhu dari Celcius ke Kelvin
function celciusToKelvin(celcius) {
    return celcius + 273.15;
}

// Function untuk mengonversi suhu dari Fahrenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Function untuk mengonversi suhu dari Kelvin ke Celcius
function kelvinToCelcius(kelvin) {
    return kelvin - 273.15;
}

// Function untuk menentukan kategori suhu
function categorizeTemperature(celcius) {
    if (celcius <= 15) {
        return "Dingin";
    } else if (celcius > 15 && celcius <= 30) {
        return "Normal";
    } else {
        return "Panas";
    }
}

export default function Page() {
    const [temperature, setTemperature] = useState("");
    const [unit, setUnit] = useState("celcius");
    const [result, setResult] = useState("");

    const handleConvert = () => {
        let celciusTemp;

        if (unit === "celcius") {
            celciusTemp = parseFloat(temperature);
            setResult(
                `${temperature}°C = ${celciusToFahrenheit(celciusTemp).toFixed(2)}°F, ` +
                `${celciusToKelvin(celciusTemp).toFixed(2)}K, ` +
                `Kategori: ${categorizeTemperature(celciusTemp)}`
            );
        } else if (unit === "fahrenheit") {
            celciusTemp = fahrenheitToCelcius(parseFloat(temperature));
            setResult(
                `${temperature}°F = ${celciusTemp.toFixed(2)}°C, ` +
                `${celciusToKelvin(celciusTemp).toFixed(2)}K, ` +
                `Kategori: ${categorizeTemperature(celciusTemp)}`
            );
        } else if (unit === "kelvin") {
            celciusTemp = kelvinToCelcius(parseFloat(temperature));
            setResult(
                `${temperature}K = ${celciusTemp.toFixed(2)}°C, ` +
                `${celciusToFahrenheit(celciusTemp).toFixed(2)}°F, ` +
                `Kategori: ${categorizeTemperature(celciusTemp)}`
            );
        }
    };

    return (
        <div className="app-container">
            <h1 className="title">Program Konversi Suhu</h1>
            <div className="form-container">
                <label>
                    Masukkan suhu:
                    <input
                        type="number"
                        className="input-field"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Pilih satuan:
                    <select
                        className="dropdown"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                    >
                        <option value="celcius">Celcius</option>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
                    </select>
                </label>
                <br />
                <button className="convert-button" onClick={handleConvert}>Konversi</button>
            </div>
            <h2 className="result-title">Hasil:</h2>
            <p className="result-output">{result}</p>
        </div>
    );
}
