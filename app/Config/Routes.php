<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'User::index');
$routes->get('shop', 'User::shop');
$routes->get('checkout', 'User::checkout');