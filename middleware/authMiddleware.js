const express = require('express')
const jwt = require('jsonwebtoken');
const Users = require('../models/User');
const config = require('../config');

function authMiddleware(req, res, next, isAdmin = false) {

    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, config.JWT.token, function (err, decoded) {
            if (err) {
                res.redirect('/login');
            } else {
                req.userId = decoded.userId;
                const user = Users.admin;
                if (user.id === req.userId) {
                    if (isAdmin && !user.isAdmin) {
                        res.redirect('/adminview');
                    } else {
                        req.isAdmin = user.isAdmin;
                        next();
                    }
                } else {
                    res.redirect('/login');
                }
            }
        });
    } else {
        res.redirect('/login');
    }
}

module.exports = authMiddleware
