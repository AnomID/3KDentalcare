<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('birth_place');
            $table->date('birth_date');
            $table->integer('age');
            $table->enum('identity_type', ['KTP', 'PASSPORT'])->default('KTP');
            $table->string('no_identity')->nullable()->unique(); 
            $table->string('citizenship')->default('Indonesia');
            $table->string('gender', 10);
            $table->string('occupation')->nullable();
            $table->text('address');
            $table->string('phone', 15)->unique();
            $table->enum('blood_type', ['A', 'B', 'AB', 'O']);
            // $table->string('insurance_number')->nullable();
            // $table->foreignId('guardian_id')->nullable()->constrained('guardians')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patiens');
    }
};
