using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Test1.Models;
using WebApplication1;

namespace Test1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        [HttpGet]    
        public IActionResult GetNews()
        {            
            List<NewsItem> NewsItems = new List<NewsItem>();
            Connect kn = new Connect();
            kn.kn_CSDL();

            //NewsItems = kn.knoi.Query<NewsItem>("Select News.ID,Category.Name as NameCategory,Title,Description,Content,CreateDate,CountView,Author.Name as NameAuthor,UrlImage from News " +
            //    "inner join Images on News.ID_Images = Images.ID" +
            //    "inner join Author on News.ID_Author = Author.ID" +
            //    "inner join Category on News.ID_Category = Category.ID").ToList();

            NewsItems = kn.knoi.Query<NewsItem>("GetNews",
                          commandType: CommandType.StoredProcedure).ToList();
            kn.knoi.Close();
			return Ok(NewsItems);
        }

  //      [HttpPost]
	
		//public IActionResult Create(NewsItem NewsItems)
		//{
				
		//		Connect kn = new Connect();
		//		kn.kn_CSDL();
		//		// Kiểm tra xem ID có tồn tại chưa, nếu có thì update ko thì insert.
		//		var check = kn.knoi.Query<NewsItem>("Select * from Product Where Id = @Id ", new { Id = todoItem.Id }).ToList();
		//		if (check.Count > 0)
		//			kn.knoi.Execute("Update News set Name = @Name,XuatXu = @XuatXu , LoaiHang = @LoaiHang Where Id = @Id ", new { Name = todoItem.Name, XuatXu = todoItem.XuatXu, LoaiHang = todoItem.LoaiHang, Id = todoItem.Id });
		//		else
		//			kn.knoi.Execute("Insert into News (Id,Name, XuatXu,LoaiHang) values (@Id, @Name, @XuatXu,@LoaiHang)", new { Id = todoItem.Id, Name = todoItem.Name, XuatXu = todoItem.XuatXu, LoaiHang = todoItem.LoaiHang });

		//		kn.knoi.Close();
			
		//	return RedirectToAction("Index", "Home");
		//}
	}
}
