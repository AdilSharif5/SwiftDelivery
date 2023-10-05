global using FastEndpoints;
global using FluentValidation;
using FastEndpoints.Swagger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SwiftDelivery.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddFastEndpoints();
builder.Services.AddEndpointsApiExplorer();
builder.Services.SwaggerDocument();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

});
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(jwt =>
{
    jwt.SaveToken = true;
    jwt.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        // IssuerSigningKey = new SymmetricSecurityKey(""),
        ValidateIssuer = false,// for dev purpose
        ValidateLifetime = true

    };

});
builder.Services.AddDbContext<DataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();


// Configure the HTTP request pipeline.
app.UseCors();
app.UseFastEndpoints();
app.UseSwaggerGen();
app.UseHttpsRedirection();
app.Run();