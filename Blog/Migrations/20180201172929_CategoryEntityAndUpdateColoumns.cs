using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Blog.Migrations
{
    public partial class CategoryEntityAndUpdateColoumns : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "MediaFiles",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "MediaFiles",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LastUpdatedBy",
                table: "MediaFiles",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatedDate",
                table: "MediaFiles",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "Lookup",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Lookup",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LastUpdatedBy",
                table: "Lookup",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdatedDate",
                table: "Lookup",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreatedBy = table.Column<int>(nullable: true),
                    CreatedDate = table.Column<DateTime>(nullable: true),
                    LastUpdatedBy = table.Column<int>(nullable: true),
                    LastUpdatedDate = table.Column<DateTime>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    ParentCategoryId = table.Column<int>(nullable: true),
                    PatentCategoryId = table.Column<int>(nullable: false),
                    UrlSlug = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Category_Category_ParentCategoryId",
                        column: x => x.ParentCategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Category_ParentCategoryId",
                table: "Category",
                column: "ParentCategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "MediaFiles");

            migrationBuilder.DropColumn(
                name: "LastUpdatedBy",
                table: "MediaFiles");

            migrationBuilder.DropColumn(
                name: "LastUpdatedDate",
                table: "MediaFiles");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Lookup");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Lookup");

            migrationBuilder.DropColumn(
                name: "LastUpdatedBy",
                table: "Lookup");

            migrationBuilder.DropColumn(
                name: "LastUpdatedDate",
                table: "Lookup");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "MediaFiles",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
