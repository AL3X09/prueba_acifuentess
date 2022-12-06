<?php

namespace App\Controllers;

use Config\Services;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use Exception;

// headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control");

//grupo de la unidad de servicios de salud
class Prueba extends ResourceController
{

    use ResponseTrait;

    public function index()
    {
    }

    public function E1()
    {
        try {
            if (!empty($_POST['anio'])) {
                $anio = $_POST['anio'];
                //print_r(strlen($anio));
                if (strlen($anio) < 4) {
                    $response = [
                        'status' => 404,
                        "error" => FALSE,
                        "messages" => "Debe ingresar un año valido",
                    ];
                } else {

                    if (($anio % 4 == 0 && $anio % 100 != 0) || $anio % 400 == 0) {
                        $response = [
                            'status' => 201,
                            "error" => FALSE,
                            "messages" => "Es Bisiesto",
                        ];
                    } else {
                        $response = [
                            'status' => 201,
                            "error" => FALSE,
                            "messages" => "No es Bisiesto",
                        ];
                    }
                }
            } else {
                $response = [
                    'status' => 400,
                    "error" => TRUE,
                    'messages' => 'Error, Debe ingresar datos a consultar',
                ];
            }

            return $this->respond($response);
        } catch (\Exception $e) {
            return $this->failServerError('se ha presntado una exepción ' . $e->getMessage());
        }
    }

    public function _2()
    {
    }
}
