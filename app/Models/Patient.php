<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name', 
        'birth_place', 
        'birth_date', 
        'age', 
        'identity_type',
        'no_identity', 
        'citizenship', 'gender', 
        'occupation',
        'address', 
        'phone', 
        'blood_type'
    ];
}
