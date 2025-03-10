<?php

namespace App\Controllers;

class User extends BaseController
{
    public function index(): string
    {
        return view('header') . view('index') . view('footer');
    }

    public function shop(): string
    {
        return view('header') . view('shop') . view('footer');
    }

    public function checkout(): string
    {
        return view('header') . view('checkout') . view('footer');
    }
}
