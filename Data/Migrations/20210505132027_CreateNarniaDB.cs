using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Narnia.Data.Migrations
{
    public partial class CreateNarniaDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AnimalType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TypeName = table.Column<string>(type: "TEXT", nullable: true),
                    Species = table.Column<string>(type: "TEXT", nullable: true),
                    Class = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AnimalType", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Animal",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AnimalType_Id = table.Column<int>(type: "INTEGER", nullable: false),
                    AnimalName = table.Column<string>(type: "TEXT", nullable: true),
                    Sex = table.Column<string>(type: "TEXT", nullable: true),
                    AquisitionDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DOB = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Animal", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Animal_AnimalType_AnimalType_Id",
                        column: x => x.AnimalType_Id,
                        principalTable: "AnimalType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Animal_AnimalType_Id",
                table: "Animal",
                column: "AnimalType_Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Animal");

            migrationBuilder.DropTable(
                name: "AnimalType");
        }
    }
}
