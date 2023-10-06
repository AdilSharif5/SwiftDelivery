using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SwiftDelivery.Migrations
{
    /// <inheritdoc />
    public partial class changedjobidnameandcreatedupdatedateforproject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "JobID",
                table: "Jobs",
                newName: "JobId");

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatedDate",
                table: "Projects",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastUpdatedDate",
                table: "Projects");

            migrationBuilder.RenameColumn(
                name: "JobId",
                table: "Jobs",
                newName: "JobID");
        }
    }
}
